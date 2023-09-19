package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentHeader24: ImageVector
  get() {
    if (_documentHeader24 != null) {
      return _documentHeader24!!
    }
    _documentHeader24 = fluentIcon(name = "Regular.DocumentHeader24", 24f) {
      materialPath {
          moveTo(8.505F, 5.005F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.671F, -1.5F, 1.5F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.829F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(11.49F, -0.909F)
          curveTo(19.915F, 2.926F, 18.94F, 2.0F, 17.75F, 2.0F)
          horizontalLineTo(6.25F)
          lineTo(6.096F, 2.005F)
          curveTo(4.926F, 2.085F, 4.0F, 3.06F, 4.0F, 4.25F)
          verticalLineToRelative(15.5F)
          lineToRelative(0.005F, 0.154F)
          curveTo(4.085F, 21.074F, 5.06F, 22.0F, 6.25F, 22.0F)
          horizontalLineToRelative(11.5F)
          lineToRelative(0.154F, -0.005F)
          curveTo(19.074F, 21.915F, 20.0F, 20.94F, 20.0F, 19.75F)
          verticalLineTo(4.25F)
          lineToRelative(-0.005F, -0.154F)
          close()
          moveTo(6.25F, 3.5F)
          horizontalLineToRelative(11.5F)
          lineToRelative(0.102F, 0.007F)
          curveTo(18.218F, 3.557F, 18.5F, 3.87F, 18.5F, 4.25F)
          verticalLineToRelative(15.5F)
          lineToRelative(-0.007F, 0.102F)
          curveToRelative(-0.05F, 0.366F, -0.363F, 0.648F, -0.743F, 0.648F)
          horizontalLineTo(6.25F)
          lineToRelative(-0.102F, -0.007F)
          curveTo(5.782F, 20.443F, 5.5F, 20.13F, 5.5F, 19.75F)
          verticalLineTo(4.25F)
          lineToRelative(0.007F, -0.102F)
          curveTo(5.557F, 3.782F, 5.87F, 3.5F, 6.25F, 3.5F)
          close()        
      }
    }
    return _documentHeader24!!
  }

private var _documentHeader24: ImageVector? = null
