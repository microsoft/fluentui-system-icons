package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ServiceBell24: ImageVector
  get() {
    if (_serviceBell24 != null) {
      return _serviceBell24!!
    }
    _serviceBell24 = fluentIcon(name = "Filled.ServiceBell24", 24f) {
      materialPath {
          moveTo(10.0F, 4.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(1.24F)
          curveToRelative(3.596F, 0.886F, 6.25F, 4.137F, 6.25F, 8.008F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-15.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.335F, -0.75F, -0.75F)
          curveToRelative(0.0F, -3.86F, 2.668F, -7.098F, 6.25F, -7.999F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(3.25F, 3.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(12.836F, 9.0F, 13.25F, 9.0F)
          curveToRelative(1.253F, 0.0F, 2.143F, 0.618F, 2.886F, 1.68F)
          curveToRelative(0.237F, 0.34F, 0.705F, 0.422F, 1.044F, 0.184F)
          curveToRelative(0.34F, -0.237F, 0.422F, -0.705F, 0.184F, -1.044F)
          curveToRelative(-0.93F, -1.33F, -2.228F, -2.32F, -4.114F, -2.32F)
          close()
          moveTo(2.0F, 17.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(16.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()        
      }
    }
    return _serviceBell24!!
  }

private var _serviceBell24: ImageVector? = null
