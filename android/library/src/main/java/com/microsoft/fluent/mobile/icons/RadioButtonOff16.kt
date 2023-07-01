package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RadioButtonOff16: ImageVector
  get() {
    if (_radioButtonOff16 != null) {
      return _radioButtonOff16!!
    }
    _radioButtonOff16 = fluentIcon(name = "Regular.RadioButtonOff16", 16f) {
      materialPath {
          moveTo(1.853F, 1.147F)
          lineToRelative(13.0F, 13.0F)
          curveToRelative(0.196F, 0.194F, 0.196F, 0.511F, 0.0F, 0.706F)
          curveTo(14.757F, 14.951F, 14.629F, 15.0F, 14.5F, 15.0F)
          curveToRelative(-0.128F, 0.0F, -0.256F, -0.049F, -0.354F, -0.146F)
          lineToRelative(-2.272F, -2.272F)
          curveTo(10.828F, 13.466F, 9.477F, 14.0F, 8.0F, 14.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, -2.686F, -6.0F, -6.0F)
          curveToRelative(0.0F, -1.477F, 0.533F, -2.829F, 1.418F, -3.874F)
          lineTo(1.146F, 1.854F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()
          moveTo(3.0F, 8.0F)
          curveToRelative(0.0F, 2.761F, 2.239F, 5.0F, 5.0F, 5.0F)
          horizontalLineTo(7.999F)
          curveToRelative(1.2F, 0.0F, 2.302F, -0.424F, 3.164F, -1.129F)
          lineTo(4.128F, 4.836F)
          curveTo(3.423F, 5.698F, 3.0F, 6.8F, 3.0F, 8.0F)
          close()
          moveToRelative(10.0F, 0.0F)
          curveToRelative(0.0F, -2.76F, -2.239F, -5.0F, -5.0F, -5.0F)
          lineTo(7.998F, 2.998F)
          curveToRelative(-0.832F, 0.0F, -1.605F, 0.223F, -2.295F, 0.583F)
          lineTo(4.956F, 2.834F)
          curveTo(5.849F, 2.307F, 6.887F, 2.0F, 7.999F, 2.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, 2.686F, 6.0F, 6.0F)
          curveToRelative(0.0F, 1.112F, -0.308F, 2.15F, -0.835F, 3.043F)
          lineToRelative(-0.747F, -0.747F)
          curveTo(12.777F, 9.605F, 13.0F, 8.832F, 13.0F, 8.0F)
          close()        
      }
    }
    return _radioButtonOff16!!
  }

private var _radioButtonOff16: ImageVector? = null
