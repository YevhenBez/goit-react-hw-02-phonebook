import css from './css/filter.module.css';

function Filter({ value, onChange }) {
    return (
        <label>
            Find contacts by name
            <input
                className={css.inputFilterName}
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

export default Filter;