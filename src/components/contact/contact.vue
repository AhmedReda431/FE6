<template>
  <div class="contact">
    <form id="signup-form" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col form-group">
          <label class="col-form-label col-form-label-lg text-left"
            >Name <span class="text-danger">*</span></label
          >
          <input
            type="text"
            v-model.trim="$v.name.$model"
            :class="{ 'is-invalid': validationStatus($v.name) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.name.required" class="invalid-feedback">
            The name field is required.
          </div>
        </div>
        <div class="col form-group">
          <label class="col-form-label col-form-label-lg"
            >Email <span class="text-danger">*</span></label
          >
          <input
            type="email"
            v-model.trim="$v.email.$model"
            :class="{ 'is-invalid': validationStatus($v.email) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.email.required" class="invalid-feedback">
            The email field is required.
          </div>
          <div v-if="!$v.email.email" class="invalid-feedback">
            The email is not valid.
          </div>
        </div>
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Phone <span class="text-danger">*</span></label
          >
          <input
            type="number"
            min="0"
            v-model.trim="$v.phone.$model"
            :class="{ 'is-invalid': validationStatus($v.phone) }"
            class="form-control form-control-lg"
          />
          <div v-if="!$v.phone.required" class="invalid-feedback">
            The Phone field is required.
          </div>
          <div v-if="!$v.phone.minLength" class="invalid-feedback">
            You must have at least
            {{ $v.phone.$params.minLength.min }} letters.
          </div>
        </div>
        <div class="col-12 form-group">
          <label class="col-form-label col-form-label-lg"
            >Message <span class="text-danger">*</span></label
          >
          <textarea
            cols="20"
            rows="5"
            v-model.trim="$v.message.$model"
            :class="{ 'is-invalid': validationStatus($v.message) }"
            class="form-control form-control-lg"
          ></textarea>
          <div v-if="!$v.message.required" class="invalid-feedback">
            The message field is required.
          </div>
          <div v-if="!$v.message.maxLength" class="invalid-feedback">
            You must not have greater then
            {{ $v.message.$params.maxLength.max }} letters.
          </div>
        </div>
        <div class="col-12 form-group text-right">
          <button class="btn">Send</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
export default {
  name: "SignupForm",
  data: function () {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  validations: {
    name: { required },
    email: { required, email },
    phone: { required, minLength: minLength(11), maxLength: maxLength(14) },
    message: { required, maxLength: maxLength(100) },
  },

  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit: function () {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      alert("Data was sent");
    },
  },
};
</script>

<style lang="scss" scoped>
form{
  width: 80%;
  margin: auto;
}
button {
  background-color: #fff;
  color: #2c3e50;
  padding: 5px 25px;
  line-height: 1.7;
  font-size: 17px;
  font-weight: 600;
  font-family: inherit;
  margin-right: 40px;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    color: #2c3e50;
  }
}
input,
textarea {
  // width: 70%;
  margin: auto;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: none;
  }
}
textarea {
  resize: none;
}
label {
  text-align: left !important;
  display: block;
  text-align: left;
}
.form-control.is-invalid,
.was-validated .form-control:invalid {
  border-width: 2px;
}
.invalid-feedback {
  color: #fff;
  text-align: left;
}
.col-form-label-lg {
  padding-bottom: 3px;
}
.invalid-feedback {
  margin-top: 12px;
}
@media (max-width: 767px) {
  form{
  width: 100%;
}
  .row {
    display: block;
  }
  .btn-group-lg > .btn,
  .btn-lg {
    font-size: 15px;
  }
  input,
  textarea {
    width: 100%;
  }
}
</style>