import { useState } from 'react'
import tinycolor from 'tinycolor2'

import StyleTag from './StyleTag'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
    const [color, setColor] = useState('#01a7ef')
    const [pastel, setPastel] = useState('#80d4f7')

    const handleColorChange = (e) => {
        setColor(e.target.value)
        const tColor = tinycolor(color)
        const saturatedTColor = tColor.saturate(10)
        const mixedTColor = tinycolor.mix(saturatedTColor, '#FFFFFF', 50)
        setPastel(mixedTColor.toHexString())
    }

    return (
        <>
            <StyleTag color={color} pastel={pastel} />

            <div className='p-4 max-w-[600px] h-screen mx-auto text-5xl grid'>
                <Header />
                <Main
                    color={color}
                    pastel={pastel}
                    handleColorChange={handleColorChange}
                />
                <Footer />
            </div>
        </>
    )
}

export default App
