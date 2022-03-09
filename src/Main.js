const Main = ({ color, pastel, handleColorChange }) => (
    <main>
        <div className='flex flex-col h-full justify-between items-center'>
            <div className='relative rounded-lg w-40 h-40 overflow-hidden'>
                <input
                    type='color'
                    value={color}
                    onChange={handleColorChange}
                    className='absolute -inset-2 w-44 h-44'
                />
            </div>
            <input
                type='text'
                className='text-xl border text-center w-40 rounded-lg'
                value={color}
                onChange={handleColorChange}
            />
            <span>⬇️</span>
            <div className='relative rounded-lg w-40 h-40 overflow-hidden'>
                <input
                    type='color'
                    className='absolute -inset-2 w-44 h-44'
                    value={pastel}
                    readOnly
                />
            </div>
            <input
                type='text'
                className='text-xl border text-center w-40 rounded-lg'
                value={pastel}
                readOnly
            />
        </div>
    </main>
)

export default Main
