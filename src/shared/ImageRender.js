import EmptyImage from './EmptyImage';
export default function RenderImage({show, classStyle}) {
  if (show.image && show.image.medium) {
    return (
      <img src={show.image.medium} className={classStyle} alt="..."/>
    )
  } else {
    return <EmptyImage />;
  }
}
