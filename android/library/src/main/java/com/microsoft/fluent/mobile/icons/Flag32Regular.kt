package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flag32: ImageVector
  get() {
    if (_flag32 != null) {
      return _flag32!!
    }
    _flag32 = fluentIcon(name = "Regular.Flag32", 32f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 3.672F, 5.672F, 3.0F, 6.5F, 3.0F)
          horizontalLineTo(28.0F)
          curveToRelative(0.379F, 0.0F, 0.725F, 0.214F, 0.894F, 0.553F)
          curveToRelative(0.17F, 0.339F, 0.133F, 0.744F, -0.094F, 1.047F)
          lineTo(23.25F, 12.0F)
          lineToRelative(5.55F, 7.4F)
          curveToRelative(0.227F, 0.303F, 0.264F, 0.708F, 0.094F, 1.047F)
          curveTo(28.725F, 20.786F, 28.38F, 21.0F, 28.0F, 21.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(4.5F)
          close()
          moveTo(7.0F, 19.0F)
          horizontalLineToRelative(19.0F)
          lineToRelative(-4.8F, -6.4F)
          curveToRelative(-0.267F, -0.356F, -0.267F, -0.844F, 0.0F, -1.2F)
          lineTo(26.0F, 5.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(14.0F)
          close()        
      }
    }
    return _flag32!!
  }

private var _flag32: ImageVector? = null
