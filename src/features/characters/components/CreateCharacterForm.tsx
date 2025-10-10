export const CreateCharacterForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select id="status">
          <option>-- select status --</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <input id="species" />
      </div>
    </div>
  );
};
