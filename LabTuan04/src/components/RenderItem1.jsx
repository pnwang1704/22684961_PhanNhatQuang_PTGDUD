export default function RenderItem1({ array }) {
    return (
        <ul>
            {array.map((item, index) => {
                return <li key={index}>{item.name}, <img src={item.avatar} width={100} alt="" /></li>;
            })}
        </ul>
    );
}
