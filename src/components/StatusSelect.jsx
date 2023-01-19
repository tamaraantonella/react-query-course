const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "todo", label: "To Do" },
  { id: "cancelled", label: "Cancelled" },
];
export function StatusSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="status-select">
      <option value="">Select a status to filter</option>
      {possibleStatus.map((status) => (
        <option
          key={status.id}
          value={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
}
