export default function NavItem({ title, dropdown }) {
  return (
    <div className="relative group cursor-pointer text-white font-montserrat text-[14px] font-normal leading-[17.07px] tracking-[0.01em] text-center">
      <span>{title}</span>
     
    </div>
  );
}
