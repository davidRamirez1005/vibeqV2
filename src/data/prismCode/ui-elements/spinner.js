export let
    BorderSpinner = {
        script: `
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>` },
    Colors = {
        script: `
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>` },
    GrowingSpinner = {
        script: `
    <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>` },
    GrowingSpinner1 = {
        script: `
    <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-warning" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-info" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>` },
    AlignmentFlex = {
        script: `
    <div class="d-flex justify-content-center mb-4">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>` },
    AlignmentFloat = {
        script: `
    <div class="clearfix mb-4">
        <div class="spinner-border float-end" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div class="clearfix">
        <div class="spinner-border float-start" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>` },
    AlignmentTextCenter = {
        script: `
    <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>` },
    SpinnerSizes = {
        script: `
    <div class="spinner-border spinner-border-sm me-4" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow spinner-grow-sm me-4" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border me-4" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>` },
    AlignmentMargin = {
        script: `
    <div class="spinner-border m-5" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>` },
    Buttons = {
        script: `
    <div class="btn-list">
        <button class="btn btn-primary-light" type="button" disabled>
            <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-primary-light" type="button" disabled>
            <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-primary-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            <span class="visually-hidden">Loading...</span>
        </button>
        <button class="btn btn-primary-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-secondary-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-success-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-info-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-warning-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-danger-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-light" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
        <button class="btn btn-dark text-fixed-white" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    </div>` };