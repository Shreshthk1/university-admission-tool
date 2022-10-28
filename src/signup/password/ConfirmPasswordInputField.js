function ConfirmPasswordInputField({
  handleValidation,
  handlePasswordChange,
  confirmPasswordValue,
  confirmPasswordError,
}) {
  return (
    <>
      <div>
        <label for="confirmPassword">
          <b>Password Again*</b>
        </label>
        <input
          type="password"
          value={confirmPasswordValue}
          onChange={handlePasswordChange}
          onKeyUp={handleValidation}
          name="confirmPassword"
          placeholder="Password"
          required
        />
        <p className="input-error">{confirmPasswordError}</p>
      </div>
    </>
  );
}
export default ConfirmPasswordInputField;
