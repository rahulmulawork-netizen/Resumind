import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => ([
    { title: 'Resumind | Wipe Data' },
    { name: 'description', content: 'Wipe development data' },
])

const WipeApp = () => {
    const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
    const navigate = useNavigate();
    const [files, setFiles] = useState<FSItem[]>([]);

    const loadFiles = async () => {
        const files = (await fs.readDir("./")) as FSItem[];
        setFiles(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate("/auth?next=/wipe");
        }
    }, [isLoading]);

    const handleDelete = async () => {
        files.forEach(async (file) => {
            await fs.delete(file.path);
        });
        await kv.flush();
        loadFiles();
    };

    if (isLoading) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-xl font-medium animate-pulse">Loading...</div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-red-600 font-medium">Error: {error}</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-20 px-8 flex flex-col gap-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold mb-2">Dev Tools: Wipe App Data</h1>
                <p className="text-gray-600">Authenticated as: <span className="font-semibold text-black">{auth.user?.username}</span></p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold mb-4 text-black">Existing files in root directory:</h2>
                {files.length === 0 ? (
                    <p className="text-gray-500 italic">No files found.</p>
                ) : (
                    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                        {files.map((file) => (
                            <div key={file.id} className="flex flex-row items-center gap-3 p-2 bg-white rounded shadow-sm">
                                <img src="/icons/info.svg" alt="file" className="size-4 opacity-50" />
                                <p className="font-mono text-sm">{file.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="flex gap-4">
                <button
                    className="bg-red-500 hover:bg-red-600 transition-colors text-white font-medium px-6 py-3 rounded-xl cursor-pointer shadow-sm"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete all files and flush the KV store? This cannot be undone.")) {
                            handleDelete();
                        }
                    }}
                >
                    Wipe All Data
                </button>
                <button 
                    className="bg-gray-200 hover:bg-gray-300 transition-colors text-gray-800 font-medium px-6 py-3 rounded-xl cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
            </div>
        </main>
    );
};

export default WipeApp;