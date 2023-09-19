package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Next32: ImageVector
  get() {
    if (_next32 != null) {
      return _next32!!
    }
    _next32 = fluentIcon(name = "Regular.Next32", 32f) {
      materialPath {
          moveTo(26.002F, 5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(22.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          close()
          moveTo(3.999F, 6.504F)
          curveToRelative(0.0F, -2.002F, 2.236F, -3.192F, 3.897F, -2.073F)
          lineToRelative(14.003F, 9.432F)
          curveToRelative(1.466F, 0.987F, 1.472F, 3.142F, 0.013F, 4.138F)
          lineTo(7.909F, 27.56F)
          curveToRelative(-1.66F, 1.132F, -3.91F, -0.056F, -3.91F, -2.066F)
          verticalLineTo(6.506F)
          close()
          moveTo(6.78F, 6.09F)
          curveTo(6.447F, 5.866F, 6.0F, 6.104F, 6.0F, 6.504F)
          verticalLineToRelative(18.991F)
          curveToRelative(0.0F, 0.402F, 0.45F, 0.64F, 0.782F, 0.413F)
          lineToRelative(14.003F, -9.559F)
          curveToRelative(0.292F, -0.2F, 0.29F, -0.63F, -0.002F, -0.828F)
          lineTo(6.779F, 6.09F)
          close()        
      }
    }
    return _next32!!
  }

private var _next32: ImageVector? = null
