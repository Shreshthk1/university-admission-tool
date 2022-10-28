function PasswordInputField({
  handleValidation,
  handlePasswordChange,
  passwordValue,
  passwordError,
}) {
  return (
    <>
      <div>
        <label for="password">
          <b>Password*</b>
        </label>
        <input
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="password"
          placeholder="Password"
          required
        />
        <p className="input-error">{passwordError}</p>
      </div>
    </>
  );
}
export default PasswordInputField;
