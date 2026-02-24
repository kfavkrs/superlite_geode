import { useState } from 'react';
import { Image as ImageIcon, GripVertical } from 'lucide-react';

export default function Step4_ImageSetup() {
    const [globalLightbox, setGlobalLightbox] = useState(true);
    const [showCounter, setShowCounter] = useState(true);
    const [showCaptions, setShowCaptions] = useState(true);
    const [keyboardNav, setKeyboardNav] = useState(true);

    // Dummy images wrapper
    const dummyImages = [
        { id: 1, name: 'nfc-chip.jpg', lightbox: true, caption: 'The NTAG215 chip before embedding' },
        { id: 2, name: 'printer-bed.jpg', lightbox: true, caption: 'First layer on the Prusa i3' },
        { id: 3, name: 'final-card.png', lightbox: true, caption: 'The finished custom business card' }
    ];

    return (
        <div className="flex flex-col h-full max-w-4xl mx-auto w-full pb-8">
            <div className="mb-6 flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center mb-3">
                    <ImageIcon size={24} />
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-1">Image Configuration</h2>
                <p className="text-text-secondary text-center">
                    Configure how your media behaves when clicked.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Image List */}
                <div className="md:col-span-2 border border-border rounded-xl p-6 bg-bg-primary shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-text-primary">Your Images</h3>
                        <span className="text-xs text-text-secondary">Drag to reorder</span>
                    </div>

                    <div className="space-y-4">
                        {dummyImages.map(img => (
                            <div key={img.id} className="flex gap-4 p-4 border border-border rounded-xl bg-bg-secondary group items-center">
                                <div className="cursor-grab text-border group-hover:text-text-secondary">
                                    <GripVertical size={20} />
                                </div>
                                <div className="w-20 h-20 bg-border rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                                    <ImageIcon size={24} className="text-text-secondary opacity-50" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <div className="text-sm font-medium text-text-primary truncate">{img.name}</div>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" defaultChecked={img.lightbox} className="w-4 h-4 text-accent rounded border-border focus:ring-accent" />
                                            <span className="text-xs text-text-secondary font-medium uppercase">Lightbox</span>
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            defaultValue={img.caption}
                                            placeholder="Enter caption..."
                                            className="w-full text-sm bg-bg-primary border border-border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-accent"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Global Settings */}
                <div className="space-y-6">
                    <div className="border border-border rounded-xl p-6 bg-bg-primary shadow-sm space-y-4">
                        <h3 className="font-bold text-text-primary mb-2">Global Settings</h3>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={globalLightbox}
                                onChange={(e) => setGlobalLightbox(e.target.checked)}
                                className="mt-1 w-4 h-4 text-accent rounded border-border focus:ring-accent"
                            />
                            <span className="text-sm text-text-primary font-medium">Enable click-to-enlarge for all</span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={showCounter}
                                onChange={(e) => setShowCounter(e.target.checked)}
                                className="mt-1 w-4 h-4 text-accent rounded border-border focus:ring-accent"
                            />
                            <span className="text-sm text-text-primary font-medium">Show image counter (e.g. 3/8)</span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={showCaptions}
                                onChange={(e) => setShowCaptions(e.target.checked)}
                                className="mt-1 w-4 h-4 text-accent rounded border-border focus:ring-accent"
                            />
                            <span className="text-sm text-text-primary font-medium">Show captions in lightbox</span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={keyboardNav}
                                onChange={(e) => setKeyboardNav(e.target.checked)}
                                className="mt-1 w-4 h-4 text-accent rounded border-border focus:ring-accent"
                            />
                            <span className="text-sm text-text-primary font-medium">Keyboard navigation (arrows)</span>
                        </label>
                    </div>

                    <button className="w-full bg-bg-secondary border border-border text-text-primary hover:bg-border transition-colors font-medium rounded-xl py-3 flex items-center justify-center gap-2">
                        <ImageIcon size={18} /> Test Lightbox
                    </button>
                </div>
            </div>
        </div>
    );
}
