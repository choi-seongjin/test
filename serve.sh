#!/usr/bin/env bash
# Local Jekyll preview for the redesign-hybrid branch.
# Pulls in the user-staged Ruby development headers/libs so native gem
# extensions (json, eventmachine, ffi) compile and run without system
# ruby-dev (which would require sudo apt install).
#
# Usage:
#   ./serve.sh             # → http://127.0.0.1:4000
#   ./serve.sh --host 0.0.0.0 --port 8080   # bind elsewhere

set -euo pipefail

export PATH="$HOME/.local/share/gem/ruby/3.0.0/bin:$PATH"
export RUBYOPT="-r$HOME/.local/lib/ruby-shims/rbconfig_override.rb"
export CPATH="$HOME/.local/ruby-headers/ruby-3.0.0:$HOME/.local/ruby-headers/x86_64-linux-gnu-ruby-3.0.0:${CPATH:-}"
export LIBRARY_PATH="$HOME/.local/ruby-lib:${LIBRARY_PATH:-}"
export LD_LIBRARY_PATH="$HOME/.local/ruby-lib:${LD_LIBRARY_PATH:-}"

cmd="${1:-serve}"
case "$cmd" in
  build)
    shift
    bundle exec jekyll build "$@"
    ;;
  install)
    bundle install
    ;;
  serve|"")
    shift || true
    bundle exec jekyll serve --livereload "$@"
    ;;
  *)
    bundle exec jekyll "$cmd" "$@"
    ;;
esac
