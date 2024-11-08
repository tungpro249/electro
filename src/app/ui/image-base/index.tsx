import Image from 'next/image';

const BaseImage = ({
  src,
  alt = '',
  width = '100%',
  height = '100%',
  aspectRatio = '1 / 1', // Tỷ lệ khung hình mặc định (1:1), có thể điều chỉnh
  className = '',
}) => {
  const isPercentage = (value) => typeof value === 'string' && value.endsWith('%');
  const widthStyle = isPercentage(width) ? width : `${width}px`;
  const heightStyle = isPercentage(height) ? height : `${height}px`;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: widthStyle,
        height: heightStyle,
        aspectRatio, // Sử dụng tỷ lệ khung hình có thể thay đổi
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill" // Giữ layout fill để ảnh bao phủ toàn bộ container
        objectFit="cover" // Đảm bảo ảnh vừa vặn với tỷ lệ
        className="rounded-md"
      />
    </div>
  );
};

export default BaseImage;
