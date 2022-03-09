const StyleTag = ({ color, pastel }) => (
    <style>
        {`.to-\\[\\#80d4f7\\] {
                --tw-gradient-to: ${pastel};
            }
            
            .from-\\[\\#01a7ef\\] {
                --tw-gradient-from: ${color};
                --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, ${pastel});
            }
    `}
    </style>
)

export default StyleTag
