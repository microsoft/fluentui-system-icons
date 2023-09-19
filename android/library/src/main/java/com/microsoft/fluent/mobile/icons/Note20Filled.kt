package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Note20: ImageVector
  get() {
    if (_note20 != null) {
      return _note20!!
    }
    _note20 = fluentIcon(name = "Filled.Note20", 20f) {
      materialPath {
          moveTo(14.0F, 3.0F)
          curveToRelative(1.598F, 0.0F, 2.904F, 1.249F, 2.995F, 2.824F)
          lineTo(17.0F, 6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(-4.0F)
          lineToRelative(-0.176F, 0.005F)
          curveToRelative(-1.517F, 0.088F, -2.731F, 1.302F, -2.819F, 2.819F)
          lineTo(10.0F, 13.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.598F, 0.0F, -2.904F, -1.249F, -2.995F, -2.824F)
          lineTo(3.0F, 14.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.598F, 1.249F, -2.904F, 2.824F, -2.995F)
          lineTo(6.0F, 3.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(2.9F, 8.001F)
          curveToRelative(-0.077F, 0.237F, -0.198F, 0.458F, -0.358F, 0.652F)
          lineToRelative(-0.128F, 0.14F)
          lineToRelative(-4.621F, 4.621F)
          curveToRelative(-0.224F, 0.224F, -0.496F, 0.39F, -0.792F, 0.487F)
          lineTo(11.0F, 13.0F)
          lineToRelative(0.005F, -0.15F)
          curveToRelative(0.073F, -0.982F, 0.856F, -1.768F, 1.838F, -1.844F)
          lineTo(13.0F, 11.0F)
          lineToRelative(3.9F, 0.001F)
          close()        
      }
    }
    return _note20!!
  }

private var _note20: ImageVector? = null
