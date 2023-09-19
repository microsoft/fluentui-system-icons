package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCollapseAll24: ImageVector
  get() {
    if (_arrowCollapseAll24 != null) {
      return _arrowCollapseAll24!!
    }
    _arrowCollapseAll24 = fluentIcon(name = "Regular.ArrowCollapseAll24", 24f) {
      materialPath {
          moveTo(2.0F, 4.75F)
          curveTo(2.0F, 4.336F, 2.336F, 4.0F, 2.75F, 4.0F)
          horizontalLineToRelative(18.5F)
          curveTo(21.664F, 4.0F, 22.0F, 4.336F, 22.0F, 4.75F)
          reflectiveCurveTo(21.664F, 5.5F, 21.25F, 5.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 5.5F, 2.0F, 5.164F, 2.0F, 4.75F)
          close()
          moveToRelative(4.22F, 3.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(3.0F, 3.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(7.5F, 10.56F)
          verticalLineToRelative(8.19F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(6.0F, 19.164F, 6.0F, 18.75F)
          verticalLineToRelative(-8.19F)
          lineToRelative(-1.72F, 1.72F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(3.0F, -3.0F)
          close()
          moveToRelative(5.28F, 0.53F)
          curveTo(11.5F, 8.336F, 11.836F, 8.0F, 12.25F, 8.0F)
          horizontalLineToRelative(9.0F)
          curveTo(21.664F, 8.0F, 22.0F, 8.336F, 22.0F, 8.75F)
          reflectiveCurveTo(21.664F, 9.5F, 21.25F, 9.5F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()        
      }
    }
    return _arrowCollapseAll24!!
  }

private var _arrowCollapseAll24: ImageVector? = null
