type ButtonProp = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string
}

export default function Button({ type, title, icon, variant}: ButtonProp) {
  return (
    <button className={`${variant}`} type={type}>
        {icon}
        {title}
    </button>
  )
}
