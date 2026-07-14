// Иконки — только из Figma (public/icons), перекрашиваются через CSS mask
export default function Icon({ name, size = 24, color = 'currentColor', style, className = '' }) {
  return (
    <span
      className={`icon ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(/icons/${name}.svg)`,
        maskImage: `url(/icons/${name}.svg)`,
        ...style,
      }}
    />
  )
}
