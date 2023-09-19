package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CircleLine16: ImageVector
  get() {
    if (_circleLine16 != null) {
      return _circleLine16!!
    }
    _circleLine16 = fluentIcon(name = "Regular.CircleLine16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-1.025F, 0.5F)
          horizontalLineToRelative(-9.95F)
          curveTo(3.275F, 11.027F, 5.407F, 13.0F, 8.0F, 13.0F)
          curveToRelative(2.593F, 0.0F, 4.725F, -1.973F, 4.975F, -4.5F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveTo(12.725F, 4.973F, 10.593F, 3.0F, 8.0F, 3.0F)
          curveTo(5.407F, 3.0F, 3.276F, 4.973F, 3.025F, 7.5F)
          horizontalLineToRelative(9.95F)
          close()        
      }
    }
    return _circleLine16!!
  }

private var _circleLine16: ImageVector? = null
