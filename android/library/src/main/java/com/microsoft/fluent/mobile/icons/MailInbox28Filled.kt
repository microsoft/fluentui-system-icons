package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailInbox28: ImageVector
  get() {
    if (_mailInbox28 != null) {
      return _mailInbox28!!
    }
    _mailInbox28 = fluentIcon(name = "Filled.MailInbox28", 28f) {
      materialPath {
          moveTo(21.75F, 3.0F)
          curveTo(23.545F, 3.0F, 25.0F, 4.455F, 25.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 25.0F, 3.0F, 23.545F, 3.0F, 21.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(15.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          reflectiveCurveToRelative(2.75F, -1.231F, 2.75F, -2.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(17.5F, 15.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          close()        
      }
    }
    return _mailInbox28!!
  }

private var _mailInbox28: ImageVector? = null
