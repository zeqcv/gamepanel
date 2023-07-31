<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="this.$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, All Rights Reserverd
            <i class="fa fa-heart"></i> by
            <a
              href="https://www.hostlariz.com"
              class="font-weight-bold"
              target="_blank"
              >Hostlariz</a
            >
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a
                href="https://www.hostlariz.com"
                class="nav-link text-muted"
                target="_blank"
                >Hostlariz</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://www.hostlariz.com/presentation"
                class="nav-link text-muted"
                target="_blank"
                >About Us</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://www.hostlariz.com/blog"
                class="nav-link text-muted"
                target="_blank"
                >Blog</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
