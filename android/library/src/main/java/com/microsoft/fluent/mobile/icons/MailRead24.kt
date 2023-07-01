package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailRead24: ImageVector
  get() {
    if (_mailRead24 != null) {
      return _mailRead24!!
    }
    _mailRead24 = fluentIcon(name = "Filled.MailRead24", 24f) {
      materialPath {
          moveTo(2.0F, 10.127F)
          lineToRelative(9.653F, 5.038F)
          curveToRelative(0.218F, 0.113F, 0.477F, 0.113F, 0.694F, 0.0F)
          lineTo(22.0F, 10.128F)
          verticalLineToRelative(7.622F)
          curveToRelative(0.0F, 1.733F, -1.356F, 3.15F, -3.065F, 3.245F)
          lineTo(18.75F, 21.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(2.0F, 17.75F)
          verticalLineToRelative(-7.623F)
          close()
          moveToRelative(1.1F, -1.958F)
          lineToRelative(8.517F, -5.064F)
          curveToRelative(0.202F, -0.12F, 0.447F, -0.137F, 0.662F, -0.051F)
          lineToRelative(0.104F, 0.051F)
          lineTo(20.9F, 8.17F)
          curveToRelative(0.235F, 0.14F, 0.439F, 0.319F, 0.605F, 0.526F)
          lineTo(12.0F, 13.655F)
          lineToRelative(-9.505F, -4.96F)
          curveTo(2.62F, 8.54F, 2.765F, 8.4F, 2.93F, 8.28F)
          lineTo(3.1F, 8.17F)
          lineToRelative(8.517F, -5.064F)
          lineTo(3.1F, 8.17F)
          close()        
      }
    }
    return _mailRead24!!
  }

private var _mailRead24: ImageVector? = null
