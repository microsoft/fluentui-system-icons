package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailInbox24: ImageVector
  get() {
    if (_mailInbox24 != null) {
      return _mailInbox24!!
    }
    _mailInbox24 = fluentIcon(name = "Filled.MailInbox24", 24f) {
      materialPath {
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineTo(13.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(9.75F, 13.75F)
          curveTo(9.75F, 14.993F, 10.757F, 16.0F, 12.0F, 16.0F)
          reflectiveCurveToRelative(2.25F, -1.007F, 2.25F, -2.25F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(4.5F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.918F, -0.707F, -1.671F, -1.607F, -1.744F)
          lineTo(17.75F, 4.5F)
          close()        
      }
    }
    return _mailInbox24!!
  }

private var _mailInbox24: ImageVector? = null
