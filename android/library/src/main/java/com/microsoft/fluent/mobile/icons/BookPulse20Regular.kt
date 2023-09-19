package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookPulse20: ImageVector
  get() {
    if (_bookPulse20 != null) {
      return _bookPulse20!!
    }
    _bookPulse20 = fluentIcon(name = "Regular.BookPulse20", 20f) {
      materialPath {
          moveTo(4.0F, 16.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(5.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(15.776F, 18.0F, 15.5F, 18.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveTo(15.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(6.0F)
          curveTo(5.448F, 3.0F, 5.0F, 3.448F, 5.0F, 4.0F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(4.0F)
          close()
          moveTo(9.455F, 6.293F)
          curveTo(9.375F, 6.118F, 9.202F, 6.003F, 9.01F, 6.0F)
          curveTo(8.817F, 5.997F, 8.64F, 6.104F, 8.553F, 6.276F)
          lineTo(7.19F, 9.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 9.0F, 6.0F, 9.224F, 6.0F, 9.5F)
          reflectiveCurveTo(6.224F, 10.0F, 6.5F, 10.0F)
          horizontalLineToRelative(1.0F)
          curveToRelative(0.19F, 0.0F, 0.362F, -0.107F, 0.447F, -0.276F)
          lineTo(8.98F, 7.66F)
          lineToRelative(2.066F, 4.546F)
          curveToRelative(0.077F, 0.17F, 0.241F, 0.282F, 0.427F, 0.292F)
          curveToRelative(0.185F, 0.01F, 0.361F, -0.082F, 0.457F, -0.242F)
          lineTo(13.283F, 10.0F)
          horizontalLineTo(13.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 9.0F, 13.5F, 9.0F)
          horizontalLineTo(13.0F)
          curveToRelative(-0.176F, 0.0F, -0.338F, 0.092F, -0.429F, 0.243F)
          lineToRelative(-1.01F, 1.683F)
          lineToRelative(-2.106F, -4.633F)
          close()        
      }
    }
    return _bookPulse20!!
  }

private var _bookPulse20: ImageVector? = null
