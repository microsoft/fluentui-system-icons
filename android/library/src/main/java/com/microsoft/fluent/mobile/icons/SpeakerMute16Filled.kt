package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SpeakerMute16: ImageVector
  get() {
    if (_speakerMute16 != null) {
      return _speakerMute16!!
    }
    _speakerMute16 = fluentIcon(name = "Filled.SpeakerMute16", 16f) {
      materialPath {
          moveTo(9.0F, 2.5F)
          curveToRelative(0.0F, -0.201F, -0.12F, -0.382F, -0.306F, -0.46F)
          curveTo(8.51F, 1.96F, 8.295F, 2.001F, 8.151F, 2.141F)
          lineToRelative(-2.927F, 2.85F)
          horizontalLineTo(3.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(2.99F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(1.723F)
          lineToRelative(2.927F, 2.875F)
          curveToRelative(0.143F, 0.14F, 0.358F, 0.182F, 0.543F, 0.104F)
          curveTo(8.88F, 13.883F, 9.0F, 13.701F, 9.0F, 13.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveToRelative(1.147F, 3.646F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(1.147F, 1.147F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(12.708F, 8.0F)
          lineToRelative(1.146F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineTo(12.0F, 8.707F)
          lineToRelative(-1.147F, 1.147F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(11.293F, 8.0F)
          lineToRelative(-1.146F, -1.146F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _speakerMute16!!
  }

private var _speakerMute16: ImageVector? = null
