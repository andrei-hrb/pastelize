const Main = ({ color, pastel, handleColorChange }) => (
    <main>
        <div className='flex flex-col h-full justify-between items-center'>
            <div className='relative rounded-lg w-72 h-72 overflow-hidden'>
                <input
                    type='color'
                    value={color}
                    onChange={handleColorChange}
                    className='absolute -inset-2 w-80 h-80'
                />
            </div>
            <span>⬇️</span>
            <div className='relative rounded-lg w-72 h-72 overflow-hidden'>
                <input
                    type='color'
                    className='absolute -inset-2 w-80 h-80'
                    value={pastel}
                    readOnly
                />
            </div>
        </div>
    </main>
)

export default Main
