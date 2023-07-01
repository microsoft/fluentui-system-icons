package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailInbox24: ImageVector
  get() {
    if (_mailInbox24 != null) {
      return _mailInbox24!!
    }
    _mailInbox24 = fluentIcon(name = "Regular.MailInbox24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.733F, 0.0F, 3.15F, 1.356F, 3.245F, 3.066F)
          lineTo(21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.733F, -1.357F, 3.15F, -3.066F, 3.245F)
          lineTo(17.75F, 21.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.517F, 4.356F, 3.1F, 6.066F, 3.005F)
          lineTo(6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveTo(4.5F, 14.5F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 0.918F, 0.707F, 1.671F, 1.606F, 1.744F)
          lineTo(6.25F, 19.5F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.918F, 0.0F, 1.671F, -0.707F, 1.744F, -1.607F)
          lineTo(19.5F, 17.75F)
          verticalLineTo(14.5F)
          horizontalLineToRelative(-3.825F)
          curveToRelative(-0.335F, 1.648F, -1.75F, 2.904F, -3.475F, 2.995F)
          lineTo(12.0F, 17.5F)
          curveToRelative(-1.747F, 0.0F, -3.215F, -1.195F, -3.632F, -2.812F)
          lineTo(8.325F, 14.5F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(3.25F)
          close()
          moveToRelative(13.25F, -10.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.918F, 0.0F, -1.671F, 0.707F, -1.744F, 1.606F)
          lineTo(4.5F, 6.25F)
          verticalLineTo(13.0F)
          horizontalLineTo(9.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(9.75F, 13.75F)
          curveTo(9.75F, 14.993F, 10.757F, 16.0F, 12.0F, 16.0F)
          curveToRelative(1.19F, 0.0F, 2.166F, -0.925F, 2.245F, -2.096F)
          lineToRelative(0.005F, -0.154F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(15.0F, 13.0F)
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
