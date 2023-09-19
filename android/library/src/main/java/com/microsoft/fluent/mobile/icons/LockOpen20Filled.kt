package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockOpen20: ImageVector
  get() {
    if (_lockOpen20 != null) {
      return _lockOpen20!!
    }
    _lockOpen20 = fluentIcon(name = "Filled.LockOpen20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          curveToRelative(1.292F, 0.0F, 2.423F, 0.808F, 2.836F, 2.005F)
          curveToRelative(0.136F, 0.392F, -0.072F, 0.819F, -0.464F, 0.954F)
          curveToRelative(-0.359F, 0.124F, -0.748F, -0.04F, -0.914F, -0.37F)
          lineToRelative(-0.04F, -0.094F)
          curveTo(11.214F, 3.902F, 10.652F, 3.5F, 10.0F, 3.5F)
          curveToRelative(-0.78F, 0.0F, -1.42F, 0.595F, -1.493F, 1.356F)
          lineTo(8.5F, 5.0F)
          lineTo(8.499F, 7.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(0.999F)
          lineTo(7.0F, 5.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          close()
          moveToRelative(0.0F, 9.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          close()        
      }
    }
    return _lockOpen20!!
  }

private var _lockOpen20: ImageVector? = null
