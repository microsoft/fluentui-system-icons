package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentFooter24: ImageVector
  get() {
    if (_documentFooter24 != null) {
      return _documentFooter24!!
    }
    _documentFooter24 = fluentIcon(name = "Filled.DocumentFooter24", 24f) {
      materialPath {
          moveTo(17.746F, 1.996F)
          curveToRelative(1.19F, 0.0F, 2.166F, 0.925F, 2.245F, 2.096F)
          lineToRelative(0.005F, 0.154F)
          verticalLineToRelative(15.498F)
          curveToRelative(0.0F, 1.191F, -0.925F, 2.166F, -2.096F, 2.245F)
          lineToRelative(-0.154F, 0.005F)
          horizontalLineToRelative(-11.5F)
          curveToRelative(-1.19F, 0.0F, -2.166F, -0.925F, -2.245F, -2.096F)
          lineToRelative(-0.005F, -0.154F)
          verticalLineTo(4.246F)
          curveToRelative(0.0F, -1.19F, 0.925F, -2.166F, 2.096F, -2.245F)
          lineToRelative(0.154F, -0.005F)
          horizontalLineToRelative(11.5F)
          close()
          moveTo(8.501F, 16.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          curveToRelative(0.0F, 0.829F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _documentFooter24!!
  }

private var _documentFooter24: ImageVector? = null
