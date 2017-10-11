/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vrView;

// All the scenes for the experience
var scenes = {
landing: {  //THIS IS MAIN SCENE, add all future hotspots here
    image: '360test-small.png',
    preview: '360test-small.png',
    hotspots: {
      kha: {
        pitch: 12,
        yaw: -22,
        radius: 0.05,
        distance: 1
      },
        china: {
            pitch: 4,
            yaw: -50,
            radius: 0.05,
            distance: 1
        },
        standford: {
            pitch: 7,
            yaw: 78,
            radius: 0.05,
            distance: 1
        },
        dona: {
            pitch: -2,
            yaw: 51,
            radius: 0.05,
            distance: 1
        },
        bhutan: {
            pitch: -1,
            yaw: -39,
            radius: 0.05,
            distance: 1
        },
    }
  },


    kha: {
    image: 'kha1.jpg',
    preview: 'kha1.jpg',
    hotspots: {
      landing: {
        pitch: 55,
        yaw: 0,
        radius: 0.15,
        distance: 0.5
      },
        kha2: {
            pitch: 0,
            yaw: -60,
            radius: 0.05,
            distance: 1
        },
        kha3: {
            pitch: 0,
            yaw: 60,
            radius: 0.05,
            distance: 1
        },
    }
    },
    kha2: {
        image: 'kha2.jpg',
        preview: 'kha2.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            kha: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
            kha3: {
                pitch: 0,
                yaw: 60,
                radius: 0.05,
                distance: 1
            },
        }
    },
    kha3: {
        image: 'kha3.jpg',
        preview: 'kha3.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            kha2: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
            kha: {
                pitch: 0,
                yaw: 60,
                radius: 0.05,
                distance: 1
            },
        }
    },

    china: {
        image: 'china1.jpg',
        preview: 'china1.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            china2: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
            china3: {
                pitch: 0,
                yaw: 60,
                radius: 0.05,
                distance: 1
            },
            china4: {
                pitch: 0,
                yaw: 180,
                radius: 0.05,
                distance: 1
            },
        }
    },
    china2: {
        image: 'china2.jpg',
        preview: 'china2.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            china: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
            china3: {
                pitch: 0,
                yaw: 60,
                radius: 0.05,
                distance: 1
            },
            china4: {
                pitch: 0,
                yaw: 180,
                radius: 0.05,
                distance: 1
            },
        }
    },
    china3: {
        image: 'china3.jpg',
        preview: 'china3.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            china: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
            china2: {
                pitch: 0,
                yaw: 60,
                radius: 0.05,
                distance: 1
            },
            china4: {
                pitch: 0,
                yaw: 180,
                radius: 0.05,
                distance: 1
            },
        }
    },
    china4: {
        image: 'china4.jpg',
        preview: 'china4.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            china: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
            china3: {
                pitch: 0,
                yaw: 60,
                radius: 0.05,
                distance: 1
            },
            china2: {
                pitch: 0,
                yaw: 180,
                radius: 0.05,
                distance: 1
            },
        }
    },

    standford: {
        image: 'standford.jpg',
        preview: 'standford.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5

            },
        }
    },

    dona: {
        image: 'dona1.jpg',
        preview: 'dona1.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            dona2: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
        }
    },
    dona2: {
        image: 'dona2.jpg',
        preview: 'dona2.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            dona: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
        }
    },

    bhutan: {
        image: 'bhutan1.jpg',
        preview: 'bhutan1.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            bhutan2: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
        }
    },
    bhutan2: {
        image: 'bhutan2.jpg',
        preview: 'bhutan2.jpg',
        hotspots: {
            landing: {
                pitch: 55,
                yaw: 0,
                radius: 0.15,
                distance: 0.5
            },
            bhutan: {
                pitch: 0,
                yaw: -60,
                radius: 0.05,
                distance: 1
            },
        }
    },

};

function onLoad() {
  vrView = new VRView.Player('#vrview', {
    image: 'blank.png',
    preview: 'blank.png',
    is_stereo: false,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('click', onHotspotClick);
  vrView.on('error', onVRViewError);
  vrView.on('getposition', onGetPosition);
}

function onVRViewReady(e) {
  console.log('onVRViewReady');
  loadScene('landing');
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onGetPosition(e) {
  console.log(e);

}

function onHotspotClick(e) {
  vrView.getPosition()
  console.log('onHotspotClick', e.id);
  if (e.id) {
    loadScene(e.id);
  }
}

function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview,
    is_stereo: false,
    is_autopan_off: true
  });

  // Add all the hotspots for the scene
  var newScene = scenes[id];
  var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

window.addEventListener('load', onLoad);
