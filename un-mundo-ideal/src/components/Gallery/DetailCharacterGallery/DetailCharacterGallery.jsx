import './DetailStyle.css'


export default function DetailCharacterGallery({items2}){
console.log('esto es items2',items2);
    return(
        <div className='detail-div'>
 {items2.map((item,index)=>(
<div Key={index}>
<div><img src={item?.imageUrl} alt='aa'></img></div>
<div><p>Nombre</p></div>
<div><p>{item?.name}</p></div>
<div><p>TvShow</p></div>
<div><p>{item?.tvShows}</p></div>
</div>

 ))}
        </div>
    )
}
