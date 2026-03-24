
  export function Container({children}) {
    console.log(children);
    return (
      <div>
        <div>
        container componenti
        </div>
        {children}
      </div>
    );
}
export default Container