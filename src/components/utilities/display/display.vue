<template>
  <Pageheader heading="Display " :maintitle='["Utilities", "Display"]' />
  <!-- Start::row-1 -->
  <div class="row row-sm">
    <div class="col-xl-12 col-lg-12">
      <div class="card custom-card" id="basic">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Basic Display</h6>
            <p class="text-muted  card-sub-title">The following display utilities classes will set display property of an
              element.</p>
          </div>
          <div class="table-responsive">
            <table class="table main-table-reference mt-0 mb-0">
              <thead>
                <tr>
                  <th class="wd-30p">Class</th>
                  <th class="wd-70p">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.d-inline</code></td>
                  <td>Set an inline display property of an element.</td>
                </tr>
                <tr>
                  <td><code>.d-inline-block</code></td>
                  <td>Set an inline-block display property of an element.</td>
                </tr>
                <tr>
                  <td><code>.d-block</code></td>
                  <td>Set a block display property of an element.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card custom-card" id="hiding">
        <div class="card-body">
          <div>
            <h6 class="main-content-label mb-1">Hiding Elements</h6>
            <p class="text-muted  card-sub-title">For faster mobile-friendly development, use responsive display classes
              for showing and hiding elements by device.</p>
          </div>
          <div class="table-responsive">
            <table class="table main-table-reference mt-0 mb-0">
              <thead>
                <tr>
                  <th class="wd-40p">Class</th>
                  <th class="wd-60p">Screen Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.d-none</code></td>
                  <td>Hidden on all</td>
                </tr>
                <tr>
                  <td><code>.d-none .d-sm-block</code></td>
                  <td>Hidden only on xs</td>
                </tr>
                <tr>
                  <td><code>.d-sm-none .d-md-block</code></td>
                  <td>Hidden only on sm</td>
                </tr>
                <tr>
                  <td><code>.d-md-none .d-lg-block</code></td>
                  <td>Hidden only on md</td>
                </tr>
                <tr>
                  <td><code>.d-lg-none .d-xl-block</code></td>
                  <td>Hidden only on lg</td>
                </tr>
                <tr>
                  <td><code>.d-xl-none</code></td>
                  <td>Hidden only on xl</td>
                </tr>
                <tr>
                  <td><code>.d-block</code></td>
                  <td>Visible on all</td>
                </tr>
                <tr>
                  <td><code>.d-block .d-sm-none</code></td>
                  <td>Visible only on xs</td>
                </tr>
                <tr>
                  <td><code>.d-none .d-sm-block .d-md-none</code></td>
                  <td>Visible only on sm</td>
                </tr>
                <tr>
                  <td><code>.d-none .d-md-block .d-lg-none</code></td>
                  <td>Visible only on md</td>
                </tr>
                <tr>
                  <td><code>.d-none .d-lg-block .d-xl-none</code></td>
                  <td>Visible only on lg</td>
                </tr>
                <tr>
                  <td><code>.d-none .d-xl-block</code></td>
                  <td>Visible only on xl</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->
</template>
<script>
import Pageheader from '@/shared/components/pageheader/Pageheader.vue';

export default { components: { Pageheader } };
</script>

<style scoped></style>
