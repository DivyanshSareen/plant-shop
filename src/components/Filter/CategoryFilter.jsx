export default function CategoryFilter({ category }) {
  return (
    <>
      <div className='input inline-input'>
        <input
          type='checkbox'
          id={category.name}
          name='category'
          defaultChecked={category.isChecked}></input>
        <label htmlFor={category.name}>{category.name}</label>
      </div>
    </>
  );
}
