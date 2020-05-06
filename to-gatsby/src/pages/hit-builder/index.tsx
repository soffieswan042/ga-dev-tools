// Copyright 2020 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as React from "react"
import { Provider } from "react-redux"

import store from "./_store"
import Layout from "../../components/layout"
import Parameters from "./_Parameters"
import HitElement from "./_HitCard"
import { Typography } from "@material-ui/core"

export const HitBuilder = () => {
  return (
    <>
      <Typography variant="h3">Hit summary</Typography>
      <Typography variant="body1">
        The box below displays the full hit and its validation status. You can
        update the hit in the text box and the parameter details below will be
        automatically updated.
      </Typography>

      <HitElement />

      <Typography variant="h3">Hit parameter details</Typography>
      <Typography variant="body1">
        The fields below are a breakdown of the individual parameters and values
        for the hit in the text box above. When you update these values, the hit
        above will be automatically updated.
      </Typography>

      <Parameters />
    </>
  )
}
export default () => {
  return (
    <Layout title="Hit Builder">
      <Provider store={store}>
        <HitBuilder />
      </Provider>
    </Layout>
  )
}

// store.subscribe(() => {
//   const state = store.getState()
//   console.log({ state })
// })
