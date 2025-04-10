export default function RenderItem({ array }) {
    return (
        <ul>
            {array.map(
                (item, index) => (

                    <li>{item}</li>
                )
            )}

        </ul>

    )
}
