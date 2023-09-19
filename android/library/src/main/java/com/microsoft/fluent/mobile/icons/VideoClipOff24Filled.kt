package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClipOff24: ImageVector
  get() {
    if (_videoClipOff24 != null) {
      return _videoClipOff24!!
    }
    _videoClipOff24 = fluentIcon(name = "Filled.VideoClipOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(0.702F, 0.702F)
          curveTo(2.352F, 4.568F, 2.0F, 5.368F, 2.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(2.0F, 19.545F, 3.455F, 21.0F, 5.25F, 21.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(0.358F, 0.0F, 0.702F, -0.058F, 1.024F, -0.165F)
          lineToRelative(0.945F, 0.945F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.292F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(9.837F, 11.957F)
          lineToRelative(-2.635F, 1.45F)
          curveTo(9.816F, 15.992F, 9.0F, 15.51F, 9.0F, 14.75F)
          verticalLineToRelative(-4.69F)
          lineToRelative(4.117F, 4.117F)
          close()
          moveToRelative(2.364F, -3.053F)
          curveToRelative(0.564F, 0.31F, 0.668F, 1.027F, 0.312F, 1.487F)
          lineToRelative(6.071F, 6.072F)
          curveTo(21.953F, 18.387F, 22.0F, 18.074F, 22.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(22.0F, 4.455F, 20.545F, 3.0F, 18.75F, 3.0F)
          horizontalLineTo(6.182F)
          lineToRelative(6.688F, 6.688F)
          lineToRelative(2.612F, 1.436F)
          close()        
      }
    }
    return _videoClipOff24!!
  }

private var _videoClipOff24: ImageVector? = null
