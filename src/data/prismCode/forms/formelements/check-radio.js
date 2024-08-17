export let
    checks = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
       <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
       </label>
   </div>
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
       <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
       </label>
   </div>` },
    disabledChecks = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled>
       <label class="form-check-label" for="flexCheckDisabled">
            Disabled checkbox
       </label>
   </div>
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled>
       <label class="form-check-label" for="flexCheckCheckedDisabled">
            Disabled checked checkbox
       </label>
   </div>` },
    radios = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
       <label class="form-check-label" for="flexRadioDefault1">
            Default radio
       </label>
   </div>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
       <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
       </label>
   </div>` },
    disabledRadios = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled>
       <label class="form-check-label" for="flexRadioDisabled">
            Disabled radio
       </label>
   </div>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled"
            checked disabled>
       <label class="form-check-label" for="flexRadioCheckedDisabled">
            Disabled checked radio
       </label>
   </div>` },
    stacjedDefault = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
       <label class="form-check-label" for="defaultCheck1">
            Default checkbox
       </label>
   </div>
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
       <label class="form-check-label" for="defaultCheck2">
            Disabled checkbox
       </label>
   </div>
   <div class="form-check">
       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"
            checked>
       <label class="form-check-label" for="exampleRadios1">
            Default radio
       </label>
   </div>
   <div class="form-check mb-0">
       <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"
            disabled>
       <label class="form-check-label" for="exampleRadios3">
            Disabled radio
       </label>
   </div>` },
    switchers = {
        script: `
   <div class="form-check form-switch">
       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
       <label class="form-check-label" for="flexSwitchCheckDefault">Default switch
            checkbox input</label>
   </div>
   <div class="form-check form-switch">
       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
       <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
            checkbox input</label>
   </div>
   <div class="form-check form-switch">
       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
       <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled
            switch
            checkbox input</label>
   </div>
   <div class="form-check form-switch mb-0">
       <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled"
            checked disabled>
       <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
            checked switch checkbox input</label>
   </div>` },
    checkboxSize = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked>
       <label class="form-check-label" for="checkebox-sm">
            Default
       </label>
   </div>
   <div class="form-check form-check-md d-flex align-items-center">
       <input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked>
       <label class="form-check-label" for="checkebox-md">
            Medium
       </label>
   </div>
   <div class="form-check form-check-lg d-flex align-items-center">
       <input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked>
       <label class="form-check-label" for="checkebox-lg">
            Large
       </label>
   </div>` },
    radioSizes = {
        script: `
   <div class="form-check">
       <input class="form-check-input" type="radio" name="Radio" id="Radio-sm">
       <label class="form-check-label" for="Radio-sm">
            default
       </label>
   </div>
   <div class="form-check form-check-md">
       <input class="form-check-input" type="radio" name="Radio" id="Radio-md">
       <label class="form-check-label" for="Radio-md">
            Medium
       </label>
   </div>
   <div class="form-check form-check-lg">
       <input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked>
       <label class="form-check-label" for="Radio-lg">
            Large
       </label>
   </div>` },
    switchSizes = {
        script: `
   <div class="form-check form-switch">
       <input class="form-check-input" type="checkbox" role="switch" id="switch-sm">
       <label class="form-check-label" for="switch-sm">Default</label>
   </div>
   <div class="form-check form-check-md form-switch">
       <input class="form-check-input" type="checkbox" role="switch" id="switch-md">
       <label class="form-check-label" for="switch-md">Medium</label>
   </div>
   <div class="form-check form-check-lg form-switch">
       <input class="form-check-input" type="checkbox" role="switch" id="switch-lg">
       <label class="form-check-label" for="switch-lg">Large</label>
   </div>` },
    inilne = {
        script: `
   <div class="form-check form-check-inline">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
       <label class="form-check-label" for="inlineCheckbox1">1</label>
   </div>
   <div class="form-check form-check-inline">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
       <label class="form-check-label" for="inlineCheckbox2">2</label>
   </div>
   <div class="form-check form-check-inline">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
       <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
   </div>
   <div class="form-check form-check-inline">
       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
            value="option1">
       <label class="form-check-label" for="inlineRadio1">1</label>
   </div>
   <div class="form-check form-check-inline">
       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
            value="option2">
       <label class="form-check-label" for="inlineRadio2">2</label>
   </div>
   <div class="form-check form-check-inline">
       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"
            disabled>
       <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
   </div>` },
    withoutlabels = {
        script: `
   <span class="me-3">
       <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
   </span>
   <span>
       <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value=""
            aria-label="...">
   </span>` },
    reverse = {
        script: `
   <div class="form-check form-check-reverse mb-3">
       <input class="form-check-input" type="checkbox" value="" id="reverseCheck1">
       <label class="form-check-label" for="reverseCheck1">
            Reverse checkbox
       </label>
   </div>
   <div class="form-check form-check-reverse mb-3">
       <input class="form-check-input" type="checkbox" value="" id="reverseCheck2" disabled>
       <label class="form-check-label" for="reverseCheck2">
            Disabled reverse checkbox
       </label>
   </div>

   <div class="form-check form-switch form-check-reverse">
       <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse">
       <label class="form-check-label" for="flexSwitchCheckReverse">Reverse
            switch
            checkbox input</label>
   </div>` },
    outlinedStyles = {
        script: `
   <input type="checkbox" class="btn-check" id="btn-check-outlined">
   <label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single
        toggle</label><br>

   <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked>
   <label class="btn btn-outline-secondary mb-3" for="btn-check-2-outlined">Checked</label><br>

   <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" checked>
   <label class="btn btn-outline-success m-1" for="success-outlined">Checked success
        radio</label>

   <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined">
   <label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio</label>` },
    radioToggleButtons = {
        script: `
   <input type="radio" class="btn-check" name="options" id="option1" checked>
   <label class="btn btn-primary m-1" for="option1">Checked</label>

   <input type="radio" class="btn-check" name="options" id="option2">
   <label class="btn btn-primary m-1" for="option2">Radio</label>

   <input type="radio" class="btn-check" name="options" id="option3" disabled>
   <label class="btn btn-primary m-1" for="option3">Disabled</label>

   <input type="radio" class="btn-check" name="options" id="option4">
   <label class="btn btn-primary m-1" for="option4">Radio</label>` },
    checkboxToggleButtons = {
        script: `
   <input type="checkbox" class="btn-check" id="btn-check">
   <label class="btn btn-primary m-1" for="btn-check">Single toggle</label>
   <input type="checkbox" class="btn-check" id="btn-check-2" checked>
   <label class="btn btn-primary m-1" for="btn-check-2">Checked</label>
   <input type="checkbox" class="btn-check" id="btn-check-3" disabled>
   <label class="btn btn-primary m-1" for="btn-check-3">Disabled</label>` },
    coloredCheckboxes = {
        script: `
   <div class="form-check mb-2">
       <input class="form-check-input" type="checkbox" value="" id="primaryChecked" checked>
       <label class="form-check-label" for="primaryChecked">
            Primary
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-secondary" type="checkbox" value="" id="secondaryChecked"
            checked>
       <label class="form-check-label" for="secondaryChecked">
            Secondary
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-warning" type="checkbox" value="" id="warningChecked"
            checked>
       <label class="form-check-label" for="warningChecked">
            Warning
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-info" type="checkbox" value="" id="infoChecked" checked>
       <label class="form-check-label" for="infoChecked">
            Info
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-success" type="checkbox" value="" id="successChecked"
            checked>
       <label class="form-check-label" for="successChecked">
            Success
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-danger" type="checkbox" value="" id="dangerChecked" checked>
       <label class="form-check-label" for="dangerChecked">
            Danger
       </label>
   </div>
   <div class="form-check mb-0">
       <input class="form-check-input form-checked-dark" type="checkbox" value="" id="darkChecked" checked>
       <label class="form-check-label" for="darkChecked">
            Dark
       </label>
   </div>` },
    outlineCheckboxes = {
        script: `
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-outline" type="checkbox" value="" id="primaryoutlineChecked"
            checked>
       <label class="form-check-label" for="primaryoutlineChecked">
            Primary
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-outline form-checked-secondary" type="checkbox" value=""
            id="secondaryoutlineChecked" checked>
       <label class="form-check-label" for="secondaryoutlineChecked">
            Secondary
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-outline form-checked-warning" type="checkbox" value=""
            id="warningoutlineChecked" checked>
       <label class="form-check-label" for="warningoutlineChecked">
            Warning
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-outline form-checked-info" type="checkbox" value=""
            id="infooutlineChecked" checked>
       <label class="form-check-label" for="infooutlineChecked">
            Info
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-outline form-checked-success" type="checkbox" value=""
            id="successoutlineChecked" checked>
       <label class="form-check-label" for="successoutlineChecked">
            Success
       </label>
   </div>
   <div class="form-check mb-2">
       <input class="form-check-input form-checked-outline form-checked-danger" type="checkbox" value=""
            id="dangeroutlineChecked" checked>
       <label class="form-check-label" for="dangeroutlineChecked">
            Danger
       </label>
   </div>
   <div class="form-check mb-0">
       <input class="form-check-input form-checked-outline form-checked-dark" type="checkbox" value=""
            id="darkoutlineChecked" checked>
       <label class="form-check-label" for="darkoutlineChecked">
            Dark
       </label>
   </div>` },
    coloredRadios = {
        script: `<div class="form-check mb-2">
   <input class="form-check-input" type="radio" name="primaryRadio" id="primaryRadio" checked>
   <label class="form-check-label" for="primaryRadio">
        Primary
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-secondary" type="radio" name="secondaryRadio"
        id="secondaryRadio" checked>
   <label class="form-check-label" for="secondaryRadio">
        Secondary
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-warning" type="radio" name="warningRadio" id="warningRadio"
        checked>
   <label class="form-check-label" for="warningRadio">
        Warning
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-info" type="radio" name="InfoRadio" id="InfoRadio" checked>
   <label class="form-check-label" for="InfoRadio">
        Info
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-success" type="radio" name="successRadio" id="successRadio"
        checked>
   <label class="form-check-label" for="successRadio">
        Success
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-danger" type="radio" name="dangerRadio" id="dangerRadio"
        checked>
   <label class="form-check-label" for="dangerRadio">
        Danger
   </label>
</div>
<div class="form-check mb-0">
   <input class="form-check-input form-checked-dark" type="radio" name="darkRadio" id="darkRadio" checked>
   <label class="form-check-label" for="darkRadio">
        Dark
   </label>
</div>` },
    outlineRadios = {
        script: `<div class="form-check mb-2">
   <input class="form-check-input form-checked-outline" type="radio" name="primaryoutlineRadio"
        id="primaryoutlineRadio" checked>
   <label class="form-check-label" for="primaryoutlineRadio">
        Primary
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-outline form-checked-secondary" type="radio"
        name="secondaryoutlineRadio" id="secondaryoutlineRadio" checked>
   <label class="form-check-label" for="secondaryoutlineRadio">
        Secondary
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-outline form-checked-warning" type="radio"
        name="warningoutlineRadio" id="warningoutlineRadio" checked>
   <label class="form-check-label" for="warningoutlineRadio">
        Warning
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-outline form-checked-info" type="radio"
        name="InfooutlineRadio" id="InfooutlineRadio" checked>
   <label class="form-check-label" for="InfooutlineRadio">
        Info
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-outline form-checked-success" type="radio"
        name="successoutlineRadio" id="successoutlineRadio" checked>
   <label class="form-check-label" for="successoutlineRadio">
        Success
   </label>
</div>
<div class="form-check mb-2">
   <input class="form-check-input form-checked-outline form-checked-danger" type="radio"
        name="dangeroutlineRadio" id="dangeroutlineRadio" checked>
   <label class="form-check-label" for="dangeroutlineRadio">
        Danger
   </label>
</div>
<div class="form-check mb-0">
   <input class="form-check-input form-checked-outline form-checked-dark" type="radio"
        name="darkoutlineRadio" id="darkoutlineRadio" checked>
   <label class="form-check-label" for="darkoutlineRadio">
        Dark
   </label>
</div>` },
    switchesColors = {
        script: `<div class="form-check form-switch mb-2">
   <input class="form-check-input" type="checkbox" role="switch" id="switch-primary" checked>
   <label class="form-check-label" for="switch-primary">Primary</label>
</div>
<div class="form-check form-switch mb-2">
   <input class="form-check-input form-checked-secondary" type="checkbox" role="switch"
        id="switch-secondary" checked>
   <label class="form-check-label" for="switch-secondary">Secondary</label>
</div>
<div class="form-check form-switch mb-2">
   <input class="form-check-input form-checked-warning" type="checkbox" role="switch" id="switch-warning"
        checked>
   <label class="form-check-label" for="switch-warning">Warning</label>
</div>
<div class="form-check form-switch mb-2">
   <input class="form-check-input form-checked-info" type="checkbox" role="switch" id="switch-info"
        checked>
   <label class="form-check-label" for="switch-info">Info</label>
</div>
<div class="form-check form-switch mb-2">
   <input class="form-check-input form-checked-success" type="checkbox" role="switch" id="switch-success"
        checked>
   <label class="form-check-label" for="switch-success">Success</label>
</div>
<div class="form-check form-switch mb-2">
   <input class="form-check-input form-checked-danger" type="checkbox" role="switch" id="switch-danger"
        checked>
   <label class="form-check-label" for="switch-danger">Danger</label>
</div>
<div class="form-check form-switch mb-0">
   <input class="form-check-input form-checked-dark" type="checkbox" role="switch" id="switch-dark"
        checked>
   <label class="form-check-label" for="switch-dark">Dark</label>
</div>` },
    toggleSwitchesStyle1 = {
        script: `
   <div class="row gy-1">
       <div class="col-xl-4">
           <div class="toggle on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-secondary on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-warning on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-info on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-success on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-danger on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-light on mb-3">
               <span></span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="toggle toggle-dark on mb-3">
               <span></span>
           </div>
       </div>
   </div>` },
    toggleSwitchesStyle2 = {
        script: `
   <div class="row gy-1">
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchPrimary" class="label-primary"></label><span class="ms-3">Primary</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchSecondary" class="label-secondary"></label><span
                    class="ms-3">Secondary</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchWarning" class="label-warning"></label><span class="ms-3">Warning</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchInfo" class="label-info"></label><span class="ms-3">Info</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchSuccess" class="label-success"></label><span class="ms-3">Success</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchDanger" class="label-danger"></label><span class="ms-3">Danger</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchLight" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchLight" class="label-light"></label><span class="ms-3">Light</span>
           </div>
       </div>
       <div class="col-xl-4">
           <div class="custom-toggle-switch d-flex align-items-center mb-4">
               <input id="toggleswitchDark" name="toggleswitch001" type="checkbox" checked>
               <label for="toggleswitchDark" class="label-dark"></label><span class="ms-3">Dark</span>
           </div>
       </div>
   </div>` },
    ToggleSwitch1Sizes = {
        script: `
   <div class="d-flex align-items-center flex-wrap mb-3">
       <div class="">
           <p class="text-muted m-0">Small size toggle switch<code>toggle-sm</code></p>
       </div>
       <div class="toggle toggle-sm on mb-0">
           <span></span>
       </div>
   </div>
   <div class="d-flex align-items-center flex-wrap mb-3">
       <div class="">
           <p class="text-muted m-0">Default toggle switch<code></code></p>
       </div>
       <div class="toggle toggle-secondary on mb-0">
           <span></span>
       </div>
   </div>
   <div class="d-flex align-items-center flex-wrap">
       <div class="">
           <p class="text-muted m-0">Large size toggle switch<code>toggle-lg</code></p>
       </div>
       <div class="toggle toggle-lg toggle-success on mb-0">
           <span></span>
       </div>
   </div>` },
    ToggleSwitch2Sizes = {
        script: `
   <div class="d-flex align-items-center flex-wrap mb-4">
       <div class="">
           <p class="text-muted m-0">Small size toggle switch<code>toggle-sm</code></p>
       </div>
       <div class="custom-toggle-switch toggle-sm ms-2">
           <input id="size-sm" name="toggleswitchsize" type="checkbox" checked>
           <label for="size-sm" class="label-primary"></label>
       </div>
   </div>
   <div class="d-flex align-items-center flex-wrap mb-4">
       <div class="">
           <p class="text-muted m-0">Default toggle switch</p>
       </div>
       <div class="custom-toggle-switch ms-2">
           <input id="size-default" name="toggleswitchsize" type="checkbox" checked>
           <label for="size-default" class="label-secondary mb-1"></label>
       </div>
   </div>
   <div class="d-sm-flex d-block align-items-center flex-wrap">
       <div class="mb-sm-0 mb-2">
           <p class="text-muted m-0">Large size toggle switch<code>toggle-lg</code></p>
       </div>
       <div class="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
           <input id="size-lg" name="toggleswitchsize" type="checkbox" checked>
           <label for="size-lg" class="label-success mb-2"></label>
       </div>
   </div>` };