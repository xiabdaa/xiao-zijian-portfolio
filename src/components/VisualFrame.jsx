function VisualFrame({
  variant = 'photography',
  index = '00',
  title = 'Work study',
  className = '',
  image,
  imagePosition = 'center',
  imageScale = 1,
  wide = false,
  fit = 'cover',
  showCaption = true,
}) {
  return (
    <figure
      className={`visual-frame visual-frame--${variant} ${image ? 'visual-frame--has-image' : ''} ${wide ? 'visual-frame--wide' : ''} ${fit === 'contain' ? 'visual-frame--contain' : ''} ${className}`}
      aria-label={title}
    >
      {image ? (
        <img
          src={image}
          alt=""
          style={{
            objectPosition: imagePosition,
            '--visual-image-scale': String(imageScale),
          }}
        />
      ) : null}
      <span className="visual-frame__grain" />
      <span className="visual-frame__axis" />
      {showCaption ? (
        <figcaption>
          <span>{String(index).padStart(2, '0')}</span>
          <span>{title}</span>
        </figcaption>
      ) : null}
    </figure>
  )
}

export default VisualFrame
