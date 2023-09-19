package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextBaseline20: ImageVector
  get() {
    if (_textBaseline20 != null) {
      return _textBaseline20!!
    }
    _textBaseline20 = fluentIcon(name = "Regular.TextBaseline20", 20f) {
      materialPath {
          moveTo(10.461F, 3.806F)
          curveToRelative(-0.078F, -0.185F, -0.26F, -0.306F, -0.46F, -0.306F)
          curveToRelative(-0.202F, 0.0F, -0.383F, 0.12F, -0.461F, 0.306F)
          lineToRelative(-4.0F, 9.5F)
          curveToRelative(-0.108F, 0.255F, 0.012F, 0.548F, 0.266F, 0.655F)
          curveToRelative(0.255F, 0.107F, 0.548F, -0.013F, 0.655F, -0.267F)
          lineTo(8.016F, 10.0F)
          horizontalLineToRelative(3.968F)
          lineToRelative(1.555F, 3.694F)
          curveToRelative(0.107F, 0.254F, 0.4F, 0.374F, 0.655F, 0.267F)
          curveToRelative(0.255F, -0.107F, 0.374F, -0.4F, 0.267F, -0.655F)
          lineToRelative(-4.0F, -9.5F)
          close()
          moveTo(11.563F, 9.0F)
          horizontalLineTo(8.437F)
          lineTo(10.0F, 5.288F)
          lineTo(11.563F, 9.0F)
          close()
          moveTo(2.5F, 16.0F)
          curveTo(2.224F, 16.0F, 2.0F, 16.224F, 2.0F, 16.5F)
          reflectiveCurveTo(2.224F, 17.0F, 2.5F, 17.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 16.0F, 17.5F, 16.0F)
          horizontalLineToRelative(-15.0F)
          close()        
      }
    }
    return _textBaseline20!!
  }

private var _textBaseline20: ImageVector? = null
