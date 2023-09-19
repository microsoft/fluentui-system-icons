package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Mail28: ImageVector
  get() {
    if (_mail28 != null) {
      return _mail28!!
    }
    _mail28 = fluentIcon(name = "Filled.Mail28", 28f) {
      materialPath {
          moveTo(3.0F, 10.124F)
          lineToRelative(10.654F, 5.541F)
          curveToRelative(0.217F, 0.113F, 0.475F, 0.113F, 0.692F, 0.0F)
          lineTo(25.0F, 10.125F)
          verticalLineToRelative(9.625F)
          curveToRelative(0.0F, 1.733F, -1.357F, 3.15F, -3.066F, 3.245F)
          lineTo(21.75F, 23.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(3.0F, 19.75F)
          verticalLineToRelative(-9.626F)
          close()
          moveTo(6.25F, 5.0F)
          horizontalLineToRelative(15.5F)
          curveToRelative(1.733F, 0.0F, 3.15F, 1.356F, 3.245F, 3.066F)
          lineTo(25.0F, 8.25F)
          verticalLineToRelative(0.184F)
          lineToRelative(-11.0F, 5.72F)
          lineToRelative(-11.0F, -5.72F)
          verticalLineTo(8.25F)
          curveTo(3.0F, 6.517F, 4.356F, 5.1F, 6.066F, 5.005F)
          lineTo(6.25F, 5.0F)
          horizontalLineToRelative(15.5F)
          close()        
      }
    }
    return _mail28!!
  }

private var _mail28: ImageVector? = null
