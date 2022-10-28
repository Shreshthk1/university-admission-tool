function EmailInputField({
  handleValidation,
  handleEmailChange,
  emailValue,
  emailError,
}) {
  return (
    <>
      <div>
        <label for="email">
          <b>Email*</b>
        </label>
        <input
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          onKeyUp={handleValidation}
          name="email"
          placeholder="Email"
          required
        />
        <p className="input-error">{emailError}</p>
      </div>
    </>
  );
}
export default EmailInputField;