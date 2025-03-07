import "./styles/Image.scss";

interface Props {
  path: string;
  alt?: string;
}

const Image = ({ path, alt = "image" }: Props) => {
  return (
    <div className="image-wrapper">
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/${path}`}
        alt={alt}
      />
    </div>
  );
};

export default Image;
