<template>
  <Pageheader heading="Modals" :maintitle='["Advanced-UI", "Modals"]' />

  <!-- Row -->
  <div class="row row-sm">
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Basic Modal</h6>
          </div>
          <a class="btn ripple btn-primary" data-bs-target="#modaldemo1" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Small Modal</h6>
          </div>
          <a class="btn ripple btn-secondary" data-bs-target="#modaldemo2" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Large Modal</h6>
          </div>
          <a class="btn ripple btn-info" data-bs-target="#modaldemo3" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Grid Modal</h6>
          </div>
          <a class="btn ripple btn-warning" data-bs-target="#modaldemo6" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Modal Success Alert Messages</h6>
          </div>
          <a class="btn ripple btn-success" data-bs-target="#modaldemo4" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Modal Danger Alert Messages</h6>
          </div>
          <a class="btn ripple btn-danger" data-bs-target="#modaldemo5" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Tooltips</h6>
          </div>
          <a class="btn ripple btn-success" data-bs-target="#modaldemo12" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Full Screen Modal</h6>
          </div>
          <a class="btn ripple btn-primary" data-bs-target="#modaldemo11" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-4 col-md-4">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Extra Large Modal</h6>
          </div>
          <a class="btn ripple btn-info" data-bs-target="#modaldemo9" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Scrolling Modal</h6>
          </div>
          <a class="btn ripple btn-primary" data-bs-target="#scrollingmodal" data-bs-toggle="modal"
            href="javascript:;">View Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Scrolling with Content</h6>
          </div>
          <a class="btn ripple btn-secondary" data-bs-target="#scrollmodal" data-bs-toggle="modal"
            href="javascript:;">View Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Select Inside Modals</h6>
          </div>
          <a class="btn ripple btn-info" data-bs-target="#selectmodal" data-bs-toggle="modal" href="javascript:;">View
            Demo</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6">
      <div class="card custom-card">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-3">Modal-datepicker</h6>
          </div>
          <a class="btn ripple btn-primary" data-bs-target="#modal-datepicker" data-bs-toggle="modal"
            href="javascript:;">View Demo</a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Row -->

  <!-- Start:: row-6 -->
  <h6 class="mb-3">Close Buttons:</h6>
  <div class="row row-sm">
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header justify-content-between pb-2">
          <div class="card-title">
            Basic Close
          </div>
        </div>
        <div class="card-body">
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card">
        <div class="card-header justify-content-between pb-2">
          <div class="card-title">
            Disabel state
          </div>
        </div>
        <div class="card-body">
          <button type="button" class="btn-close" disabled aria-label="Close"></button>
        </div>
      </div>
    </div>
    <div class="col-xl-4">
      <div class="card custom-card overflow-hidden">
        <div class="card-header justify-content-between pb-2">
          <div class="card-title">
            White variant
          </div>
        </div>
        <div class="card-body bg-black">
          <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
          <button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-6 -->

  <!-- Basic modal -->
  <div class="modal fade" id="modaldemo1">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Basic Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Basic modal -->

  <!-- Small modal -->
  <div class="modal fade" id="modaldemo2">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Small Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer justify-content-center">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Small Modal -->

  <!-- Large Modal -->
  <div class="modal fade" id="modaldemo3">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Large Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Large Modal -->

  <!-- Scroll modal -->
  <div class="modal fade" id="scrollingmodal">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Scrolling With Content Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure
            and praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of the truth,
            the master-builder of human happiness. No one rejects, dislikes, or avoids
            pleasure itself, because it is pleasure, but because those who do not know how
            to pursue pleasure rationally encounter consequences that are extremely
            painful.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio.
          </p>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who
            are so beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble that are
            bound to ensue; and equal blame belongs to those who fail in their duty
            through weakness of will, which is the same as saying through shrinking from
            toil and pain.
          </p>
          <p>
            These cases are perfectly simple and easy to distinguish. In a free hour, when
            our power of choice is untrammelled and when nothing prevents our being able
            to do what we like best, every pleasure is to be welcomed and every pain
            avoided. But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have to be
            repudiated and annoyances accepted. The wise man therefore always holds in
            these matters to this principle of selection: he rejects pleasures to secure
            other greater pleasures, or else he endures pains to avoid worse pains.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Scroll modal -->

  <!-- Scroll with content modal -->
  <div class="modal fade" id="scrollmodal">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Scrolling With Content Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure
            and praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of the truth,
            the master-builder of human happiness. No one rejects, dislikes, or avoids
            pleasure itself, because it is pleasure, but because those who do not know how
            to pursue pleasure rationally encounter consequences that are extremely
            painful.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
            quidem rerum facilis est et expedita distinctio.
          </p>
          <p>
            On the other hand, we denounce with righteous indignation and dislike men who
            are so beguiled and demoralized by the charms of pleasure of the moment, so
            blinded by desire, that they cannot foresee the pain and trouble that are
            bound to ensue; and equal blame belongs to those who fail in their duty
            through weakness of will, which is the same as saying through shrinking from
            toil and pain.
          </p>
          <p>
            These cases are perfectly simple and easy to distinguish. In a free hour, when
            our power of choice is untrammelled and when nothing prevents our being able
            to do what we like best, every pleasure is to be welcomed and every pain
            avoided. But in certain circumstances and owing to the claims of duty or the
            obligations of business it will frequently occur that pleasures have to be
            repudiated and annoyances accepted. The wise man therefore always holds in
            these matters to this principle of selection: he rejects pleasures to secure
            other greater pleasures, or else he endures pains to avoid worse pains.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Scroll with content modal -->

  <!-- Modal alert message -->
  <div class="modal fade" id="modaldemo4">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content fs-size-sm">
        <div class="modal-header border-bottom-0">
          <div></div>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body text-center pd-y-20 pd-x-20">
          <i class="icon ion-ios-checkmark-circle-outline tx-100 text-success lh-1 mg-t-20 d-inline-block"></i>
          <h4 class="text-success fs-semibold mg-b-20">Congratulations!</h4>
          <p class="mg-b-20 mg-x-20">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration.
          </p>
          <button aria-label="Close" class="btn ripple btn-success pd-x-25" data-bs-dismiss="modal" type="button">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="modaldemo5">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content fs-size-sm">
        <div class="modal-body text-center pd-y-20 pd-x-20">
          <button aria-label="Close" class="btn-close float-end" data-bs-dismiss="modal" type="button"></button>
          <i class="icon icon ion-ios-close-circle-outline tx-100 text-danger lh-1 mg-t-20 d-inline-block"></i>
          <h4 class="text-danger mg-b-20">Error: Cannot process your entry!</h4>
          <p class="mg-b-20 mg-x-20">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration.
          </p>
          <button aria-label="Close" class="btn ripple btn-danger pd-x-25" data-bs-dismiss="modal" type="button">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal alert message -->

  <!-- Grid modal -->
  <div class="modal fade" id="modaldemo6">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Grid Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <div class="row row-sm">
            <div class="col-md-6">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div class="col-md-6">
              <p>
                But I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a complete account
                of the who loves toil and pain can procureor sit aspernatur system.
              </p>
            </div>
          </div>
          <div class="row row-sm">
            <div class="col-md-6">
              <p>
                expound the actual teachings of the great explorer of the truth, the
                master-builder of human happiness. No one rejects, dislikes, or avoids
                pleasure itself, because it is pleasure desires to obtain pain.
              </p>
            </div>
            <div class="col-md-6">
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat aut odit voluptatem.
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Grid modal -->

  <!-- Select modal -->
  <div class="modal fade" id="selectmodal">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Select Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>
          <Selectoptions :options="options" placeholder="Choose one"
            class="" id="language" name="language" :value="value" />
          <p class="mt-3">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Select modal -->

  <!-- Datepicker modal -->
  <div class="modal fade" id="modal-datepicker">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Select Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>

          <Datepicker v-model="date" range auto-range="5" placeholder="Date-picker" />
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Datepicker modal -->

  <!-- Modal effects -->
  <div class="modal fade" id="modaldemo8">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Modal Header</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-primary" type="button">Save changes</button>
          <button class="btn ripple btn-secondary" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal effects-->

  <!-- Tooltips and Popovers -->
  <div class="modal fade" id="modaldemo12">
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Tooltips & Popover</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h5>Tooltips in a modal</h5>
          <p>
            <a href="javascript:;" data-bs-placement="top" data-bs-toggle="tooltip" title="Tooltip">Hover me</a>
            and
            <a href="javascript:;" data-bs-placement="top" data-bs-toggle="tooltip" title="Tooltip">Hover me</a>
            have tooltips on hover
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-success" type="button">Save changes</button>
          <button class="btn ripple btn-danger" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Tooltips and Popovers -->

  <!-- Full Screen Modal -->
  <div class="modal fade" id="modaldemo11">
    <div class="modal-dialog modal-fullscreen" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Large Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-success" type="button">Save changes</button>
          <button class="btn ripple btn-danger" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Full Screen Modal -->

  <!-- Extra Large Modal -->
  <div class="modal fade" id="modaldemo9">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content modal-content-demo">
        <div class="modal-header">
          <h6 class="modal-title">Large Modal</h6>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">
          <h6>Modal Body</h6>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn ripple btn-success" type="button">Save changes</button>
          <button class="btn ripple btn-danger" data-bs-dismiss="modal" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--End Extra Large Modal -->
</template>

<script type="module">
import Pageheader from "@/shared/components/pageheader/Pageheader.vue";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import Selectoptions from "@/shared/UI/selectoptions.vue";
import { ref } from "vue";

export default {
  components: { Pageheader, Selectoptions },
  setup() {
    const date = ref();

    return {
      date,
    };
  },
  mounted() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
  data() {
    return {
      value: null,
      options: ["Firefox", "Chrome", "Safari", "Opera", "Internet Explorer"],
    };
  },
  methods() {
    let myModal = new Modal(document.getElementById("myModal"));
    myModal.show();
  },
};
</script>
