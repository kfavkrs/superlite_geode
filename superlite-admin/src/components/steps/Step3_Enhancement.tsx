import { useState } from 'react';
import { useWizard } from '../../context/WizardContext';
import { Sparkles, RefreshCw, PenLine, Plus } from 'lucide-react';

export default function Step3_Enhancement() {
    const { state, updateState } = useWizard();

    // Dummy State for UI
    const [selectedTitle, setSelectedTitle] = useState(0);
    const [formatStyle, setFormatStyle] = useState('blog');

    const dummyTitles = [
        "Building a Custom NFC Card with 3D Printing",
        "My Journey Into NFC Technology",
        "3D Printing Meets Near Field Communication"
    ];

    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto w-full pb-8">
            <div className="mb-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center mb-3">
                    <Sparkles size={24} />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-1">AI Enhancement</h2>
                <p className="text-text-secondary text-center">
                    Let's polish your content for publishing.
                </p>
            </div>

            <div className="space-y-6">
                {/* Title Suggestions */}
                <div className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm">
                    <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                        Title Suggestions <span className="text-xs font-normal text-text-secondary bg-bg-secondary px-2 py-0.5 rounded-full">Pick one</span>
                    </h3>
                    <div className="space-y-3">
                        {dummyTitles.map((title, idx) => (
                            <label key={idx} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${selectedTitle === idx ? 'border-accent bg-blue-50/20' : 'border-border hover:border-text-secondary'}`}>
                                <input
                                    type="radio"
                                    name="title"
                                    checked={selectedTitle === idx}
                                    onChange={() => setSelectedTitle(idx)}
                                    className="mt-1 w-4 h-4 text-accent"
                                />
                                <span className="text-text-primary font-medium">{title}</span>
                            </label>
                        ))}
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button className="text-sm flex items-center gap-1.5 text-text-secondary hover:text-text-primary border border-border px-3 py-1.5 rounded-lg">
                            <RefreshCw size={14} /> Regenerate
                        </button>
                        <button className="text-sm flex items-center gap-1.5 text-text-secondary hover:text-text-primary border border-border px-3 py-1.5 rounded-lg">
                            <PenLine size={14} /> Custom...
                        </button>
                    </div>
                </div>

                {/* Content Formatting */}
                <div className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm">
                    <h3 className="font-bold text-text-primary mb-4">Content Formatting</h3>
                    <div className="grid grid-cols-2 gap-3 pb-2">
                        {[
                            { id: 'blog', label: 'Blog Post Style', desc: '(narrative)' },
                            { id: 'tech', label: 'Tech/Hacker News', desc: '(code-focused)' },
                            { id: 'docs', label: 'Project Docs', desc: '(structured)' },
                            { id: 'none', label: 'Keep As-Is', desc: '(no changes)' }
                        ].map(fmt => (
                            <label key={fmt.id} className={`flex flex-col p-3 border rounded-lg cursor-pointer transition-colors ${formatStyle === fmt.id ? 'border-accent bg-blue-50/20' : 'border-border hover:border-text-secondary'}`}>
                                <div className="flex items-center gap-2 mb-1">
                                    <input
                                        type="radio"
                                        name="format"
                                        checked={formatStyle === fmt.id}
                                        onChange={() => setFormatStyle(fmt.id)}
                                        className="w-4 h-4 text-accent"
                                    />
                                    <span className="text-text-primary font-medium text-sm">{fmt.label}</span>
                                </div>
                                <span className="text-xs text-text-secondary ml-6">{fmt.desc}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* SEO Description */}
                <div className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-text-primary">SEO Description <span className="text-xs font-normal text-text-secondary font-mono">134/155 chars</span></h3>
                        <div className="flex gap-2">
                            <button className="text-text-secondary hover:text-accent"><RefreshCw size={16} /></button>
                            <button className="text-text-secondary hover:text-text-primary"><PenLine size={16} /></button>
                        </div>
                    </div>
                    <p className="text-sm border border-border bg-bg-secondary p-3 rounded-lg text-text-secondary">
                        A comprehensive guide on creating a custom NFC business card using a 3D printer. Learn how to embed NTAG215 chips directly into PLA.
                    </p>
                </div>

                {/* Tags */}
                <div className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-text-primary">Tags</h3>
                        <button className="text-xs flex items-center gap-1 bg-bg-secondary hover:bg-border px-2 py-1 rounded-md transition-colors text-text-primary">
                            <Plus size={14} /> Add Tag
                        </button>
                    </div>

                    <div className="space-y-3">
                        <div>
                            <div className="text-xs text-text-secondary mb-1.5 uppercase font-medium">Your tags</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-accent text-xs px-2.5 py-1 rounded-full font-medium">3D-printing ✕</span>
                                <span className="bg-blue-100 text-accent text-xs px-2.5 py-1 rounded-full font-medium">NFC ✕</span>
                                <span className="bg-blue-100 text-accent text-xs px-2.5 py-1 rounded-full font-medium">maker ✕</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-text-secondary mb-1.5 uppercase font-medium">Trending</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-bg-secondary border border-border text-text-secondary hover:border-accent hover:text-accent cursor-pointer text-xs px-2.5 py-1 rounded-full transition-colors">+ IoT</span>
                                <span className="bg-bg-secondary border border-border text-text-secondary hover:border-accent hover:text-accent cursor-pointer text-xs px-2.5 py-1 rounded-full transition-colors">+ hardware</span>
                                <span className="bg-bg-secondary border border-border text-text-secondary hover:border-accent hover:text-accent cursor-pointer text-xs px-2.5 py-1 rounded-full transition-colors">+ DIY</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
